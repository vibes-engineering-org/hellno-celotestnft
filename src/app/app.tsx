"use client";

import { PROJECT_TITLE } from "~/lib/constants";
import { NFTMintFlow } from "~/components/nft-mint-flow";

export default function App() {
  return (
    <div className="w-[400px] mx-auto py-8 px-4 min-h-screen">
      {/* TEMPLATE_CONTENT_START - Replace content below */}
      <div className="flex flex-col items-center justify-center min-h-[80vh] space-y-8">
        <div className="text-center space-y-4 mb-8">
          <div className="w-16 h-16 mx-auto bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 rounded-full flex items-center justify-center">
            <span className="text-2xl">🌅</span>
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Sunrise Beach Collection
          </h1>
          <p className="text-muted-foreground">
            Mint your exclusive beach sunrise NFT
          </p>
        </div>
        
        <div className="w-full max-w-[350px]">
          <NFTMintFlow 
            contractAddress="0xD2Ede6B7b1B08B2A8bB36118fBC0F76409719070"
            tokenId="1"
            network="celo"
            buttonText="Mint Beach NFT"
          />
        </div>
        
        <div className="text-center text-sm text-muted-foreground max-w-xs">
          <p>Connect your wallet and mint in just two clicks. Each NFT captures the serenity of a beach sunrise.</p>
        </div>
      </div>
      {/* TEMPLATE_CONTENT_END */}
    </div>
  );
}
