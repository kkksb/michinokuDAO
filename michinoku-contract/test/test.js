const MichinokuMarket = artifacts.require("MichinokuMarket")

let michinokuMarket
const baseURI = "https://sample.com/1"

contract("MichinokuMarket", (accounts) => {

  it("check deploy", async () => {
    michinokuMarket = await MichinokuMarket.deployed()
    assert(michinokuMarket.address, "deploy of MichinokuMarket is failed")
  })

  it("mint NFT", async () => {
    // mint NFT
    await michinokuMarket.michinokuMint(baseURI)
    // check minted NFT owner
    await michinokuMarket.ownerOf(1).then(owner => {
      assert.equal(owner, accounts[0], "owner is not accounts[0]")
    })
    // check minted NFT tokenURI
    await michinokuMarket.tokenURI(1).then(tokenURI => {
      assert.equal(tokenURI, baseURI, `uri is not ${baseURI}`)
    })
  })
})
