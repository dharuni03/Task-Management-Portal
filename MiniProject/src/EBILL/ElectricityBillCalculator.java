package EBILL;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Scanner;

public class ElectricityBillCalculator {
    public static void main(String[] args) {
        try {
            // Establish the connection to the MySQL database (Abstraction)
            String url = "jdbc:mysql://127.0.0.1:3306/EBill";
            String username = "root";
            String password = "Thilo@1069";
            Connection connection = DriverManager.getConnection(url, username, password);
            
            // Initialize Scanner for user input (Encapsulation)
            Scanner scanner = new Scanner(System.in);

            int choice;
            do {
                // Display menu options (Abstraction)
                System.out.println("1. Add a new customer");
                System.out.println("2. Generate bill");
                System.out.println("3. View customer details");
                System.out.println("4. View bill details");
                System.out.println("5. Update payment status");
                System.out.println("6. Exit");
                System.out.print("Enter your choice: ");
                choice = scanner.nextInt();

                switch (choice) {
                    case 1:
                    	 // Add a new customer
                        Customer newCustomer = addNewCustomer(scanner);
                        newCustomer.insertCustomer(connection); // Polymorphism through method overloading
                        break;
                    case 2:
                        // Generate bill
                        Bill.generateBill(connection, scanner);
                        break;
                    case 3:
                        // View customer details
                        Customer.viewCustomerDetails(connection, scanner);
                        break;
                    case 4:
                        // View bill details
                        Bill.viewBillDetails(connection, scanner);
                        break;
                    case 5:
                        // Update payment status
                        Bill.updatePaymentStatus(connection, scanner);
                        break;
                    case 6:
                        System.out.println("Exiting...");
                        break;
                    default:
                        System.out.println("Invalid choice. Try again.");
                }
            } while (choice != 6);

            // Close the scanner and database connection (Encapsulation)
            scanner.close();
            connection.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    // Method to create a new customer object from user input (Encapsulation)
    public static Customer addNewCustomer(Scanner scanner) {
        Customer newCustomer = new Customer();

        System.out.print("Enter customer name: ");
        newCustomer.setName(scanner.next());

        System.out.print("Enter phone number: ");
        String phoneNumberString = scanner.next();
        long phoneNumber = Long.parseLong(phoneNumberString);
        newCustomer.setPhone(phoneNumber);

        System.out.print("Enter address: ");
        // Read the entire line as the address (Polymorphism through method overloading)
        scanner.nextLine(); // Consume the newline character left by previous scanner.next()
        String address = scanner.nextLine();
        newCustomer.setAddress(address);

        System.out.print("Enter Aadhar number: ");
        newCustomer.setAadharNumber(scanner.nextLong());

        return newCustomer; // Return the created Customer object
    }

}