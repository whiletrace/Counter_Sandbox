// importing test utility and addCounter, removeCounter which are the const being tested
import deepfreeze from 'deep-freeze'
import {addCounter, removeCounter} from '../../src/redux/counter.js'




// unit tests using mocha with chai assertion library and deepfreeze

describe('(redux) addCounter',function () {
	it('listBefore should equal ListAfter', function()  {
    const listAfter = [0];
    const listBefore = [];
    deepfreeze(listBefore)
expect(addCounter(listBefore)).to.eql(listAfter)
 })
})
describe('(redux) removeCounter',function(){
    it('removeCounter should skip the second item in the resulting array', function(){
        const listBefore = [0, 10, 20];
        const listAfter = [0,20];
        deepfreeze(listBefore)
        expect(removeCounter(listBefore, 1)).to.eql(listAfter)
    })
})