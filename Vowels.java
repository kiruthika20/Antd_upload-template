package training.assignment2;


import java.io.FileWriter;
import java.io.File;
import java.util.Scanner;
public class Vowels{
	
	static StringBuilder sb=new StringBuilder();

	 public static String fileToString(String filePath) throws Exception {
	      Scanner sc = new Scanner(new File(filePath));
          String input = new String();
	      while (sc.hasNextLine()) {
	         input = sc.nextLine();
	        }
		   return input;
	     
	      }
	 
	 public static StringBuilder detectVowel(String input){
		 
		    
	        String[] inputArray=input.split(" ");
	        char[] vowels={'a','e','i','o','u'};
	        for(String s: inputArray){
	            for(int i=0;i<vowels.length;i++){
	                if(s.charAt(1)==vowels[i]){
	                	sb.append(s+" ");
	                    break;
	                }	                     
	            }
	            
	        }
			return sb;
			
	    }
    public static void main(String[] args) throws Exception{
    	String str = fileToString("C:\\Users\\krithika\\Desktop\\sampleInput.txt");
        Vowels.detectVowel(str);
        FileWriter myWriter = new FileWriter("C:\\Users\\krithika\\Desktop\\sampleOutput.txt");
	    myWriter.write(sb+" ");
	    myWriter.close();
	    System.out.print("Successfully wrote to the file.");
 
    
    	  }
}