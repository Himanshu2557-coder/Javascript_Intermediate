public class If_Else {
    public static void main(String[] args) {
        int number = 10;

        // Check if the number is positive, negative, or zero
        if (number > 0) {
            System.out.println("The number is positive.");
        } else if (number < 0) {
            System.out.println("The number is negative.");
        } else {
            System.out.println("The number is zero.");
        }

        // Check if the number is even or odd
        if (number % 2 == 0) {
            System.out.println("The number is even.");
        } else {
            System.out.println("The number is odd.");
        }

        // Check if the number is within a specific range
        if (number >= 1 && number <= 100) {
            System.out.println("The number is within the range of 1 to 100.");
        } else {
            System.out.println("The number is outside the range of 1 to 100.");
        }
    }
    
}
