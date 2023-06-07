<!--장영훈-->
<%@ page contentType ="text/html; charset=utf-8" %>
<%@ page import ="java.sql.DriverManager" %>
<%@ page import ="java.sql.Connection" %>
<%@ page import ="java.sql.Statement" %>
<%@ page import ="java.sql.ResultSet" %>
<%@ page import ="java.sql.SQLException" %>
<%@ page import = "java.sql.*" %>
<%@ page import = "java.util.*" %>


<!DOCTYPE html>
<html lang="ko">
    <head>
        <title>표준 레시피 인기순위</title>
        <meta charset="utf-8">
        <link rel="stylesheet" type="text/css" href="ranking.css">
    </head>
    <body>
        <% // MySQL JDBC Driver Loading
                //Class.forName("com.mysql.cj.jdbc.Driver"); 
                //Connection conn =null;
                //Statement stmt =null;
                //ResultSet rs =null;


                //try {
                    //String jdbcDriver ="jdbc:mysql://localhost:3306/ProjectDB?serverTimezone=UTC"; 
                    //String dbUser ="cloud"; //mysql id
                    //String dbPass ="5678"; //mysql password
                    //String query ="select * from recipe ORDER BY views desc"; //query
                    
                    // Create DB Connection
                    //conn = DriverManager.getConnection(jdbcDriver, dbUser, dbPass);
                    
                    // Create Statement
                    //stmt = conn.createStatement();
                    
                    // Run Qeury
                    //rs = stmt.executeQuery(query);
                    // Print Result (Run by Query)
                   
            %>

            


<div class="head">
                <h3 style="
                    margin: 0;
                    font-size: 2.5rem;
                    color: black;
                    cursor: pointer;
                "><a style="float: left;" onCLick = "location.href='index.html'">세상에 나쁜 요리는 없다 </a>
                </h3>
                <div class="menu">
                    <a class="btn" onCLick = "location.href='standard.html'">인기순위</a>
                    <a class="btn" onClick ="location.href='precipe.html'">레시피</a>
                    <a class="btn" onclick="location.href='standardranking.jsp'">레시피업로드</a>
                    <a class="btn" onClick="location.href='login.html'">검색</a>
                    <a class="btn" onClick="location.href='login.html'">로그아웃</a>
                </div>
            </div>

        <div class="intro_text">
            <h1>인기순위</h1>
        </div>


        <div class="recipe">
            <table>  
            
                <tr>
                    <%
            		//int count = 1;
		            //while (rs.next()) {
                    %>
				<td>
                     <!--DB에서 받아와 화면에 뿌려주는 부분-->
					<%-- <a href=<%="http://49.50.161.25:8080//redirectHandler.jsp?num=" + rs.getString("num")%>> --%>
                    <img src='<%
                    //=rs.getString("picture")
                    %>' width='300' height='300'><br>
                    요리: <%
                    //=rs.getString("recipetitle")
                    %><br>
                    재료: <%
                    //=rs.getInt("")
                    %><br>
                    소요시간: <%
                    //=rs.getString("usetime")
                    %></a>
				</td>
                    <%
                    // 이미지를 4개씩 나눠주는 부분
                    //if (count > 0 && count % 4 == 0) {	
                    %>
			    </tr>
			    <tr>
                    <%
                    //}
			        //count++;
		            //}
                    %>
                


                 <%
            //} catch(SQLException ex) {
            //    out.print(ex.getMessage());
            //    ex.printStackTrace();
            //} finally {
                // Close Statement
            //    if (rs !=null) try { rs.close(); } catch(SQLException ex) {}
            //    if (stmt !=null) try { stmt.close(); } catch(SQLException ex) {}
                // Close Connection
            //    if (conn !=null) try { conn.close(); } catch(SQLException ex) {}
            //}
          
            %>
            </table>
        </div>
    </body>
</html>
