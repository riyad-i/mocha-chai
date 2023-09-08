const capitalize = require('../functions/capitalize')
const chai = require('chai')
const expect = chai.expect

describe('Tests for Capitalize function', () => {
    it('Capitalize should be a function', ()=>{
        expect(capitalize).to.be.a('function')
    })
})