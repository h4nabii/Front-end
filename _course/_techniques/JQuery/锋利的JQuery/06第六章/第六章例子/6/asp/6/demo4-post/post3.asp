<%@ codepage=65001%>
<%
dim username,content
username=request.Form("username")
content=request.Form("content")
'POST �� GET ��������Request.Form ��Request.QueryString������
response.Write("{ username : '"&username&"' , content : '"&content&"'}")

 %>
