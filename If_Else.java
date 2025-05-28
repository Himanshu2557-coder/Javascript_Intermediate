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

        // Nested if-else example
        if (number > 0) {
            if (number % 2 == 0) {
                System.out.println("The number is a positive even number.");
            } else {
                System.out.println("The number is a positive odd number.");
            }
        } else if (number < 0) {
            if (number % 2 == 0) {
                System.out.println("The number is a negative even number.");
            } else {
                System.out.println("The number is a negative odd number.");
            }
        } else {
            System.out.println("The number is zero, which is neither positive nor negative.");
        }
        // Ternary operator example
        String result = (number > 0) ? "The number is positive." : 
                        (number < 0) ? "The number is negative." : 
                        "The number is zero.";
        System.out.println(result);
        
    }
    
}
