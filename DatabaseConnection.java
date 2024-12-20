package Jdbc;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DatabaseConnection {

    public static void main(String[] args) throws ClassNotFoundException,SQLException{


        // Register the JDBC driver (this may not be necessary in newer versions of JDBC)

        Class.forName("com.mysql.cj.jdbc.Driver");

 
        // Initialize the connection object

        Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/capgemini","root","Vara@2002");
 


                System.out.println("Connection successful!");

 
        } 

    }
 
 
