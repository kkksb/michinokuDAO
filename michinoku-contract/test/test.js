const MichinokuNFT = artifacts.require("MichinokuNFT")

let michinokuNFT
const baseURI = "https://sample.com/"

contract("Random Speech", (accounts) => {

  it("check deploy", async () => {
    michinokuNFT = await MichinokuNFT.deployed()
    assert(michinokuNFT.address, "deploy of MichinokuNFT is failed")
  })

  it("mint NFT", async () => {
    // mint 10 NFT
    for (let i = 1; i <= 10; i++) {
      await michinokuNFT.michinokuMint(baseURI + i)
    }
    // check minted NFT owner
    for (let i = 1; i <= 10; i++) {
      await michinokuNFT.ownerOf(i).then(owner => {
        assert.equal(owner, accounts[0], "owner is not accounts[0]")
      })
    }
    // check minted NFT tokenURI
    for (let i = 1; i <= 10; i++) {
      await michinokuNFT.tokenURI(i).then(tokenURI => {
        assert.equal(tokenURI, baseURI + i, `uri is not ${baseURI + i}`)
      })
    }
  })
})
