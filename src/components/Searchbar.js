import React from 'react'; 
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';


function Searchbar () {
    // state = {
    //     inputVal:'',
    //     results:[]
    // }

    // setValue = event => {
    //     this.setState({inputVal:event.target.value});
    // }

    function searchFct () {
        console.log("Handle click function engaged")
        // alert(this.state.inputVal)
    }

    // filterFct = filter => {
    //     filter.preventDefault();
    //     console.log(filter.target.value);
 
    //     var input, filter, ul, li, a, i, txtValue;
        
    //     input = document.getElementById('myInput');
    //     filter = input.value.toUpperCase();
    //     ul = document.getElementById("myUL");
    //     li = ul.getElementsByTagName('li');
        
    //     // Loop through all list items, and hide those who don't match the search query
    //     for (i = 0; i < li.length; i++) {
    //         a = li[i].getElementsByTagName("a")[0];
    //         txtValue = a.textContent || a.innerText;
    //         if (txtValue.toUpperCase().indexOf(filter) > -1) {
    //         li[i].style.display = "";
    //         } else {
    //         li[i].style.display = "none";
    //         }
    //         }
    //     }

        //=============================================

        // API.searchBooks (this.state.inputVal)
        // // alert("yes")
        //     .then(response => {   
        //         console.log(response.data.items)  
        //         // alert(response.items)           
        //         if (response.data.length === 0) {
        //             throw new Error("No results found.");
        //           }
        //           if (response.data.status === "error") {
        //             throw new Error(response.data.message);
        //           }
        //         this.setState({results:response.data.items})
        //         // alert(this.state.results)
        //     })
        //     .catch(function(error){
        //         console.log(error)
        //         // alert("no")
        //     })


    //=============================================

        return (
            <div className="searchbar">

                <FormControl>
                <InputLabel htmlFor="Search">Search...</InputLabel>
                <Input id="searchInput" onChange={searchFct()} aria-describedby="search for an employee" />
            
                </FormControl>

            </div>
        )
    } 

export default Searchbar;