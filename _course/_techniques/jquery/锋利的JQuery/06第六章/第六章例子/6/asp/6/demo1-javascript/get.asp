<%
 Dim username
 username=request("username");
 If username=="����" Then
    response.write "�������"
  Else
    response.write "�㲻������"
 End if
%>
