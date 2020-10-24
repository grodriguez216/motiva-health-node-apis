function init() {
  const userArgs = process.argv.slice(2);

  const [serviceName] = userArgs;

  if (!serviceName) {
    console.error("Error: Missing service name argument.");
    return;
  }

  if (!serviceName.includes("-")) {
    console.error("Error: Service name is not in dash-case.");
    return;
  }

  const names = {
    stack: serviceName,
    repo: codecommit(serviceName),
    devOps: devOps(serviceName),
    funcName: lowDashOnly(serviceName),
  };

  console.log(JSON.stringify(names, null, 2));
}

function lowDashOnly(serviceName) {
  return serviceName.split("-").join("_");
}

function codecommit(serviceName) {
  return `${serviceName}-codecommit`;
}

function devOps(serviceName) {
  return `${serviceName}-DevOps`;
}

init();
