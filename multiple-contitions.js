var gotJob = true;
var moneySaved = 250000;
var hasFlat=true;
if ( gotJob ) {
    console.log( "colo bea ta korei feli" );
}
else {
    console.log( 'tor kopale bea naire pagla' );
}
if ( gotJob && moneySaved > 1500000 ) {
    console.log( "colo bea ta korei feli" );
}
else {
    console.log( 'tor kopale bea naire pagla' );
}
if ( (gotJob || moneySaved > 15000000) || hasFlat ) {
    console.log( "colo bea ta korei feli" );
}
else {
    console.log( 'tor kopale bea naire pagla' );
}