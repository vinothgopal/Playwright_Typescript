# Use the official Playwright image with Node and browsers
FROM mcr.microsoft.com/playwright:v1.44.1-jammy

# Set the working directory
WORKDIR /app

# Copy only the necessary files for installing dependencies
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the project files
COPY . .

# Optional: If using Allure for reporting
# RUN npm install -g allure-commandline --save-dev

# Run Playwright install (installs browsers, etc.)
RUN npx playwright install --with-deps

# Default command (can be overridden in Jenkins)
CMD ["npm", "run", "test"]
