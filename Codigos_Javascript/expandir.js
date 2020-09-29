<button id="btn_form">Mostrar Form</button>

<form id="my_form" style="display: none;"><p>
 Escreva Aqui <br>
 O que quer que Apareça<p>
</form>

<script type="text/javascript">
   var btn = document.getElementById('btn_form');
   var form = document.getElementById('my_form');

  btn.addEventListener('click', function() {
  if(form.style.display != 'block') {
    form.style.display = 'block';
    return;
  }
  form.style.display = 'none';
});
    </script>
