<?php
$nome     = $_POST["nome"];//pega o nome inserido
$mensagem      = $_POST["mensagem"];//pega a mensagem inserida
                $msg =  "<table height='50' width='259' align='center'><tr><td bgcolor='#d9e6f7'><div align='center'><font color='#000000'><strong>Nome:</strong> $nome</font></div></td></tr>";//adiciona a mensagem
$msg .= "<tr><td bgcolor='#d9e6f7'><div align='center'><font color='#000000'><strong>Comentário:</strong> $mensagem</font></div></td></tr>";//adiciona o conteudo da mensagem
$msg .= "</table>";//termina a mensagem
                $ponteiro = fopen ("comentarios.php", "a");//arquivo em que serao postados os comentarios
fwrite($ponteiro, "$msg");//escreve no arquivo
fclose ($ponteiro);//fecha o arquivo
include "redirection.php";//redireciona para os comentarios
 
?>
