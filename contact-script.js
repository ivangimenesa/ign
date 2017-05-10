var blogId = &#39;1824474164953699926&#39;;//este número deve ser, obrigatoriamente, editado.
//As frases abaixo também podem ser editadas
var contactFormMessageSendingMsg =&#39;Enviando...&#39;;
var contactFormMessageSentMsg = &#39;Sua mensagem foi enviada com sucesso.&#39;;
var contactFormMessageNotSentMsg = &#39;A mensagem não pôde ser enviada. Por favor, tente novamente mais tarde.&#39;;
var contactFormEmptyMessageMsg =&#39;Campo de mensagem não pode ficar vazio.&#39;;
var contactFormInvalidEmailMsg = &#39;É necessário um email válido.&#39;

var widgetLoaded=false;
function sendEmailMsg() {
if(widgetLoaded== false) {
_WidgetManager._RegisterWidget(&#39;_ContactFormView&#39;, new _WidgetInfo(&#39;ContactForm1&#39;, &#39;sidebar&#39;, null, document.getElementById(&#39;ContactForm1&#39;), {&#39;contactFormMessageSendingMsg&#39;: contactFormMessageSendingMsg , &#39;contactFormMessageSentMsg&#39;: contactFormMessageSentMsg , &#39;contactFormMessageNotSentMsg&#39;: contactFormMessageNotSentMsg , &#39;contactFormInvalidEmailMsg&#39;: contactFormInvalidEmailMsg , &#39;contactFormEmptyMessageMsg&#39;: contactFormEmptyMessageMsg , &#39;title&#39;: &#39;Contact Form&#39;, &#39;blogId&#39;: blogId, &#39;contactFormNameMsg&#39;: &#39;Name&#39;, &#39;contactFormEmailMsg&#39;: &#39;Email&#39;, &#39;contactFormMessageMsg&#39;: &#39;Message&#39;, &#39;contactFormSendMsg&#39;: &#39;Send&#39;, &#39;submitUrl&#39;: &#39;https://www.blogger.com/contact-form.do&#39;}, &#39;displayModeFull&#39;));
widgetLoaded=true;
document.getElementById(&#39;ContactForm1_contact-form-submit&#39;).click();
}
return true;
}
