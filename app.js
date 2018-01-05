//login
var provider = new firebase.auth.GoogleAuthProvider();
$('#login').click(function(){
  firebase.auth()
  .signInWithPopup(provider)
  .then(function(result) {
    console.log( result.user);
    guardarDatos( result.user);
  $('#login').hide();
$('#root').append("<img src='"+result.user.photoURL+"'>");
  });
//
});
// guardar datos
function guardarDatos(user){
  var usuario ={
    uid: user.uid,
    nombre : user.displayName,
    email : user.email,
    foto : user.photoURL
  }
  firebase.database().ref("usuarios/" + user.uid)
  .set(usuario);
}
// aquí leemos de la base de datos
firebase.database().ref('usuarios')
.on('child_added', function(s){
  var user = s.val();
  $('#root').append("<img width='100' src='"+user.foto+"'>");

})
