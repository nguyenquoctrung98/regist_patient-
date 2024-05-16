


let IS_init = true;

function getEntries(formDataString) {
   
    let ALL_STRING = ''

    const splitString = formDataString.split("&");

    for (let i = 0; i < splitString.length; i++){

        
        let Temp_splitString = splitString[i].split("=", 2);
        
        // console.log(Temp_splitString[0], Temp_splitString[1])

            // Set the type of the input (text by default)
            let inpt_type = "text";
            
            let ele_parent = '#main_entry_gen'

            let inpt_name =  Temp_splitString[0];

            let inpt_style = ""

            let inpt_value = Temp_splitString[1].replaceAll("+", " ")

            let inpt_label = `${inpt_value}  (${inpt_name})`
            
            let sameline = ''
           
            var div_class = "col-sm-6 mb-3"


            // 
            if (config_entry_JS.hasOwnProperty(Temp_splitString[0])) {

                console.log(Temp_splitString[0], 'DEFINED', config_entry_JS[Temp_splitString[0]]['column_d'] )
                
                if (config_entry_JS[Temp_splitString[0]].hasOwnProperty('column_d'))
                {
                    div_class  = config_entry_JS[Temp_splitString[0]]['column_d']
                }

                if (config_entry_JS[Temp_splitString[0]].hasOwnProperty('label'))
                {
                    inpt_label  = config_entry_JS[Temp_splitString[0]]['label']
                }

                if (config_entry_JS[Temp_splitString[0]].hasOwnProperty('style'))
                {
                    inpt_style  = config_entry_JS[Temp_splitString[0]]['style']
                    console.log(Temp_splitString[0], 'DEFINED', inpt_style )
                }

                if (config_entry_JS[Temp_splitString[0]].hasOwnProperty('style'))
                {
                    inpt_style  = config_entry_JS[Temp_splitString[0]]['style']
                    console.log(Temp_splitString[0], 'DEFINED', inpt_style )
                }


                if (config_entry_JS[Temp_splitString[0]].hasOwnProperty('childOF'))
                {
                    ele_parent = '#' + config_entry_JS[Temp_splitString[0]]['childOF']
                    
                }

                if (config_entry_JS[Temp_splitString[0]].hasOwnProperty('sameline'))
                    {
                        sameline = config_entry_JS[Temp_splitString[0]]['sameline']
                        
                    }
                
            }
            else{
                console.log(Temp_splitString[0], 'is no defined')
            }
            
            




            // 
            let STRING_input = `<div  style="margin-bottom:5px"  class="${div_class}" >`

            STRING_input += `<label style="font-weight:bold" > ${inpt_label} </label> ${sameline}`

            
            if (config_entry_JS.hasOwnProperty(Temp_splitString[0])) {
                if (config_entry_JS[Temp_splitString[0]]['type'] == 'dropdown')
                {
                    STRING_input = STRING_input + `<select   name ="${inpt_name}" style ="${inpt_style}" >`
                    
                    let option_let = config_entry_JS[Temp_splitString[0]]['option']

                    for (let i = 0; i < option_let.length; i++) {
                        let element = option_let[i];

                        STRING_input = STRING_input + `<option> ${element} </option>`
                        
                    }
                    
                    
                    STRING_input = STRING_input + '</select>'
                    
                }
                else
                {
                    STRING_input = STRING_input + `<input type="${inpt_type}"  name ="${inpt_name}"  value="${inpt_value}"  style ="${inpt_style}" >`
                }
            }
            else
            {
                STRING_input = STRING_input + `<input type="${inpt_type}"  name ="${inpt_name}"  value="${inpt_value}"  style ="${inpt_style}" >`
            }

            

            STRING_input += '</div>'

            // You can set other attributes on the input element here
            // newInput.placeholder = "Enter your name";

            // Append the new input element to the div

            
            $(ele_parent).append(STRING_input)
            

      }

  }


