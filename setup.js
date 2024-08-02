import { execSync } from 'child_process';

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  red: '\x1b[31m',
};

function runCommand(command) {
  try {
    execSync(command, { stdio: 'inherit' });
    return true;
  } catch (error) {
    console.error(`${colors.red}Failed to execute command: ${command}${colors.reset}`);
    return false;
  }
}

console.log(`${colors.bright}Starting setup...${colors.reset}`);

// Install dependencies
console.log(`\n${colors.bright}Installing dependencies...${colors.reset}`);
if (!runCommand('npm install')) process.exit(1);

// Run build
console.log(`\n${colors.bright}Building the project...${colors.reset}`);
if (!runCommand('npm run build')) process.exit(1);

// Run lint
console.log(`\n${colors.bright}Linting the project...${colors.reset}`);
if (!runCommand('npm run lint')) process.exit(1);

console.log(`\n${colors.green}${colors.bright}Setup completed successfully!${colors.reset}`);