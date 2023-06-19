function Base_Declaration(name, value){
  function Constructor(_value){
    if(_value!=Boolean){
      throw(`0x000001 DeclarationError - The declaration Constructor must be a boolean.`);
    };
  };
  if(name="Constructor"){
    Constructor(value)
  }
  // to be continued
};