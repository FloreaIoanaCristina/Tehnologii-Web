
function addTokens (input,tokens)
{       
    if( typeof(input)!="string" || input.length < 6 )
    {
        if(typeof(input)!="string")
            throw "Error! Input should be a string";
        if( input.length < 6 )
            throw "Error! Input should have at least 6 characters";

    }
    else{
        err=false;
            for(i =0;i<tokens.length && err==false;i++)
            {
                if(typeof(tokens[i].tokenName)!="string")
                {
                    err=true;
                    throw "Error! Invalid Array format";
                }
              
                
            }
            
            if(err==false)

            {    count = input.split('...').length - 1;
                 if(count>tokens.length)
                {
                    throw "Error! Input requires more tokens"
                }
                else
            {i=0;
                  while(input.includes("..."))
             {   var str = tokens[i].tokenName;
                input = input.replace("...",str);
                i++;

             }
             console.log(input);
            }
        }
      
        }
    

}

input= "Subsemnatul ... Declar ca ... si ca ... Data ... Semnatura ... ";
const tokens = new Array({tokenName: "eu"},{tokenName: "tu"},{tokenName: "mama"},{tokenName: "tata"},{tokenName: "cipi"});
try{
addTokens(input,tokens);
}
catch(error)
{
    console.error(error)
}