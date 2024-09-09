const thenable={
    then: function(onfulfilled)
    {
        setTimeout(()=>onfulfilled(42,1000));
    }
};
async function main()
{
    const v=await thenable.then(function()
    {
    console.log("Hello dunia");   
});
}
main();
// every promise is a thenable
// every thenable is NOT  A promises
