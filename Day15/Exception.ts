try{
    let name:any=null
    console.log(name.length)
}
catch(e)
{
    console.log("Exception handled succesfully")
}

finally{
    console.log("This block will always execute")
}