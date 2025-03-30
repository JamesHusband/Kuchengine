.PHONY: dev test test-watch dep-graph help

# Default target
.DEFAULT_GOAL := help

# Colors for pretty output
BLUE := \033[34m
GREEN := \033[32m
NC := \033[0m # No Color

help: ## Display this help message
	@echo "Usage: make [target]"
	@echo ""
	@echo "Targets:"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "$(BLUE)%-20s$(NC) %s\n", $$1, $$2}'

dev: ## Start the development server for the main app
	@echo "$(GREEN)Starting development server...$(NC)"
	nx serve kuchen

test: ## Run all tests
	@echo "$(GREEN)Running tests...$(NC)"
	nx run-many --target=test --all

test-watch: ## Run tests in watch mode
	@echo "$(GREEN)Running tests in watch mode...$(NC)"
	nx run-many --target=test --all --watch

dep-graph: ## Generate and open the dependency graph
	@echo "$(GREEN)Generating dependency graph...$(NC)"
	nx dep-graph

clean: ## Clean all build artifacts
	@echo "$(GREEN)Cleaning build artifacts...$(NC)"
	nx reset
	rm -rf dist
	rm -rf node_modules/.cache

lint: ## Run linting on all projects
	@echo "$(GREEN)Running linting...$(NC)"
	nx run-many --target=lint --all

format: ## Format all files
	@echo "$(GREEN)Formatting files...$(NC)"
	nx format:write

build: ## Build all projects
	@echo "$(GREEN)Building projects...$(NC)"
	nx run-many --target=build --all 