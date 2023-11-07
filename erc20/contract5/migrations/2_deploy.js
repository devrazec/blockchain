const Razec = artifacts.require("Razec");

module.exports = function(deployer) {
  deployer.deploy(Razec, "0xaf0c7810cb078e36c4c5bfb248ab3283d84abdbe13914229bdddd3bd01336906");
};
