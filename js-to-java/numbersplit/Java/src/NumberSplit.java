

public class NumberSplit{

    public static int[] numberSplit(int n) {
        int firstHalf = (int)Math.floor(n/2.0);
        int secondHalf =  (int)Math.ceil(n/2.0);
        return new int[]{firstHalf, secondHalf};
    }
}


