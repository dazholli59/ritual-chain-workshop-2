# My Detailed Study Notes – Bootcamp Level 2

## Overall Flow (written in my own words)
1. createMarket  
   - User sets question, oracle URL, json path, target, comparator, betting duration and resolve delay  
   - Contract converts the durations into absolute block numbers  
   - It calls Scheduler.schedule with 3 future executions

2. Betting period  
   - Anyone can call bet(marketId, YES or NO) and send RITUAL  
   - Stakes are stored in two mappings  
   - Betting stops at the close block

3. Resolution  
   - Scheduler calls onScheduledResolve at the planned block  
   - Contract picks an HTTP executor  
   - Makes the GET request  
   - Passes the body to jq  
   - Compares the extracted number with the target  
   - Sets the market to ResolvedYES, ResolvedNO or Invalid  
   - Cancels any remaining scheduled calls if successful

4. Claiming  
   - Winners call claimWinnings  
   - Simple formula: stake × totalPool ÷ winningPool  
   - Pull-based so no one pays gas for others

## Parts that impressed me most
- Treating failed data reads as Invalid instead of forcing a result
- The way each retry can use a different executor
- How clean the claim function is

## Remaining questions
- Real cost of HTTP precompile calls on mainnet
- Whether we can use more complex jq expressions later

This was the most practical and satisfying bootcamp so far.
