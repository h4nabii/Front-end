<%@ codepage=65001%>
<%
dim username,content
'POST �� GET ��������Request.Form ��Request.QueryString������
username=request.Form("username")
content=request.Form("content")
response.Write("<div class='comment'><h6> "&username&" :</h6><p class='para'> "&content&" </p></div>")
 %>
