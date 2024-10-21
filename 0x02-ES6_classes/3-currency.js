class Currency{
    constructor(code, name){
        this._code = code;
        this._name = name;
    }
    
    get code(){
        return this._code
    }
    set code(valeu){
        if(typeof valeu !== 'string'){
            throw new TypeError('')
        }
        return this._code = valeu;
    }
    get name(){
        return this._name
    }
    set name(valeu){
        if(typeof valeu !== 'string'){
            throw new TypeError('')
        }
        return this._name = valeu;
    }
     /**
   * Creates the full string representation of this Currency.
   * @returns {String}
   */

    displayFullCurrency(){
        st = `${this._name} (${this._name})`
        return st
    }
}
