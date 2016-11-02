/**
 * Created by asolovyev on 01/11/16.
 */

import dataBlocks from './dataBlocks'

console.log(dataBlocks);

let Blocks = [];
let addState = function (block, parentStateUrl) {

    try {

        let template = require(`./blocks/${block.template}.pug`);
        let templateSource = require(`!!raw!./blocks/${block.template}.pug`);

        block.template = template();
        block.templateSource = templateSource;
        block.stateUrl = parentStateUrl ? `${parentStateUrl}/${block.code}` : `/doc/${block.code}`;

        Blocks.push(block);

        if(block.children) {
            if(block.children.length > 0) {
                for(let childBlock of block.children) {
                    addState(childBlock, block.stateUrl);
                }
            }
        }

        if(parentStateUrl) {
            block.type = 'element';
        }
        else {
            block.type = 'block';
        }


    } catch (err){
        console.error("State from /doc is not installed.");
    }

};

for(let block of dataBlocks) {
    addState(block);
}
console.log(Blocks);

export default Blocks;