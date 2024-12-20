package javaprojectdemo;

public class EmployeeSystem {
	// instance variable
	private String name;
	private String department;
	private double salary;

// static variable

	private static double perkRate = 10;
	private static double taxRate = 5;

	public EmployeeSystem(String name, String department, double salary) {
		super();
		this.name = name;
		this.department = department;
		this.salary = salary;
	}

// instance methods
	public double calculateHRA() {
		return salary * 0.20;
	}

	public double calculateDA() {
		return salary * 0.10;
	}

	public double calculateTA() {
		return salary * 0.05;
	}

	public double calGrossSalary() {
		double hra = calculateHRA();
		double da = calculateDA();
		double ta = calculateTA();
		double perks = calPerks();

		return salary + hra + da + ta + perks;
	}

	public double calNetSalary() {
		double grossSalary = calGrossSalary();
		double tax = calTax(grossSalary);
		return grossSalary - tax;
	}

	public static double calPerks() {
		return perkRate / 100;
	}

	public static double calTax(double grossSalary) {
		return grossSalary * taxRate / 100;
	}

	public void display() {
		System.out.println("Employee name:" + name);
		System.out.println("department " + department);
		System.out.println("Salary " + salary);
		System.out.println("HRA " + calculateHRA());
		System.out.println("DA  " + calculateDA());
		System.out.println("TA " + calculateTA());
		System.out.println("Gross Salary " + String.format("%.2f",calGrossSalary()));
		System.out.println("Net Salary " + String.format("%.2f",calNetSalary()));
	}

	public static void main(String[] args) {
		EmployeeSystem e1 = new EmployeeSystem("Nivetha", "IT", 900000);

		e1.display();

	}

}
