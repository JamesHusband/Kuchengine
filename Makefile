.PHONY: dev test test-watch dep-graph help clean lint format build \
        tree tree-libs tree-app tree-ui tree-engine copy-tree \
        nx-reset nx-prune nx-daemon-start nx-daemon-stop nx-cloud-start

# Default target
.DEFAULT_GOAL := help

# Colors for pretty output
BLUE := \033[34m
GREEN := \033[32m
YELLOW := \033[33m
NC := \033[0m # No Color

help: ## Display this help message
	@echo "Usage: make [target]"
	@echo ""
	@echo "Targets:"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "$(BLUE)%-20s$(NC) %s\n", $$1, $$2}'

## ========== NX OPTIMIZATION TARGETS ==========

nx-daemon-start: ## Start the Nx daemon for faster project graph calculations
	@echo "$(GREEN)Starting Nx daemon...$(NC)"
	@nx daemon --start

nx-daemon-stop: ## Stop the Nx daemon
	@echo "$(YELLOW)Stopping Nx daemon...$(NC)"
	@nx daemon --stop

nx-reset: ## Reset the Nx cache and project graph
	@echo "$(YELLOW)Resetting Nx cache...$(NC)"
	@nx reset
	@echo "$(GREEN)Starting fresh daemon...$(NC)"
	@nx daemon --stop || true
	@nx daemon --start

nx-prune: ## Remove unnecessary cache and artifacts
	@echo "$(GREEN)Pruning Nx cache...$(NC)"
	@nx reset
	@rm -rf node_modules/.cache
	@rm -rf .nx/cache
	@rm -rf dist
	@rm -rf test-output

nx-cloud-start: ## Enable Nx Cloud for distributed caching (requires setup)
	@echo "$(GREEN)Connecting to Nx Cloud...$(NC)"
	@npx nx connect-to-nx-cloud

dev: nx-daemon-start ## Start the development server for the main app
	@echo "$(GREEN)Starting development server...$(NC)"
	nx serve kuchen

test: nx-daemon-start ## Run all tests
	@echo "$(GREEN)Running tests...$(NC)"
	nx run-many --target=test --all

test-watch: nx-daemon-start ## Run tests in watch mode
	@echo "$(GREEN)Running tests in watch mode...$(NC)"
	nx run-many --target=test --all --watch

dep-graph: nx-daemon-start ## Generate and open the dependency graph
	@echo "$(GREEN)Generating dependency graph...$(NC)"
	nx dep-graph

clean: nx-daemon-stop ## Clean all build artifacts and stop daemon
	@echo "$(GREEN)Cleaning build artifacts...$(NC)"
	@make nx-prune

lint: nx-daemon-start ## Run linting on all projects
	@echo "$(GREEN)Running linting...$(NC)"
	nx run-many --target=lint --all

format: nx-daemon-start ## Format all files
	@echo "$(GREEN)Formatting files...$(NC)"
	nx format:write

build: nx-daemon-start ## Build all projects
	@echo "$(GREEN)Building projects...$(NC)"
	nx run-many --target=build --all

## ========== FILE TREE HELPERS ==========

tree: ## Show the full file tree
	@echo "$(GREEN)Displaying full file tree...$(NC)"
	@tree /F

tree-libs: ## Show the libs/ file tree
	@echo "$(GREEN)Displaying libs file tree...$(NC)"
	@tree libs /F

tree-app: ## Show the apps/ file tree
	@echo "$(GREEN)Displaying apps file tree...$(NC)"
	@tree apps /F

tree-engine: ## Show the engine lib structure
	@echo "$(GREEN)Displaying engine file tree...$(NC)"
	@tree libs\\engine /F