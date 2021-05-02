package cucumberframework.steps;

import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.java.After;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Paths;
import java.util.Scanner;

public class Steps {
//    private static final Logger logger = LogManager.getLogger(Steps.class.getName());
    WebDriver driver;
    String[][] senders = new String[7][7];
    String[][] receivers = new String[7][7];
    WebDriverWait wait;
    String subject_name = "SWAPNIL BUVA";
//    BasicConfigurator.configure();

    @Before()
    public void setup(){
        System.out.println("Setting Chrome drive from Property file");
        System.setProperty("webdriver.come.driver", "chromedriver.exe");
        this.driver = new ChromeDriver();
        driver.manage().window().maximize();
        wait = new WebDriverWait(driver, 15);
    }

    @Before
    public String mailbody() throws IOException {
        System.out.println("reading the content from Mailbody.txt");
        Scanner scanner = new Scanner(Paths.get("attachments/mailBody.txt"), StandardCharsets.UTF_8.name());
        String content = scanner.useDelimiter("\\A").next();
        scanner.close();
        return content;
    }

    @Before
    public String read_sender() {
        try {
            System.out.println("reading the email ids from sender.txt");
            File myObj = new File("attachments/sender.txt");
            Scanner myReader = new Scanner(myObj);
            int i=1, j=0;
            while (myReader.hasNextLine()) {
                String data = myReader.nextLine();
                System.out.println(data);
                if(data.length()<1){continue;}
                String[] sender = data.split(",");
                System.out.println(sender.length);
                senders[i][0]= sender[0].trim();
                senders[i][1]= sender[1].trim();
                System.out.println(senders[i][0]);
                System.out.println(senders[i][1]);
                System.out.println("i = "+i);
                i++;
            }
            myReader.close();
        } catch (FileNotFoundException e) {
            System.out.println("An error occurred.");
            e.printStackTrace();
        }
        return "";
    }

    @Before
    public void read_receiver() {
        try {
            System.out.println("reading receiver.txt to fetch receiver's email ids");
            File myObj = new File("attachments/receiver.txt");
            Scanner myReader = new Scanner(myObj);
            int i=1, j=0;
            while (myReader.hasNextLine()) {
                String data = myReader.nextLine();
                System.out.println(data);
                if(data.length()<1){continue;}
                String[] receiver = data.split(",");
                System.out.println(receiver.length);
                receivers[i][0]= receiver[0].trim();
                receivers[i][1]= receiver[1].trim();
                System.out.println(receivers[i][0]);
                System.out.println(receivers[i][1]);
                System.out.println("i = "+i);
                i++;

            }
            myReader.close();
        } catch (FileNotFoundException e) {
            System.out.println("An error occurred.");
            e.printStackTrace();
        }
    }

    @Given("User navigates to www.ymail.com")
    public void user_navigates_to_www_ymail_com() {
        System.out.println("Navigating to Login.yahoo.com");
        this.driver.get("https://login.yahoo.com/");
    }

    @When("^enters correct username (\\d+)$")
    public void enters_correct_username(int n) throws InterruptedException {
        System.out.println("Entering username : "+senders[n][0]);
        driver.findElement(By.id("login-username")).sendKeys(senders[n][0]);
        Thread.sleep(2);
        driver.findElement(By.id("login-signin")).click();
        System.out.println("Clicking on Next button");
    }

    @When("^enters correct password (\\d+)$")
    public void enters_correct_password(int n)  {
        System.out.println("Entering Password :"+senders[n][1]);
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("login-passwd")));
        System.out.println(senders[n][1]);
        driver.findElement(By.id("login-passwd")).sendKeys(senders[n][1]);
    }

    @When("clicks on login button")
    public void clicks_on_login_button() throws InterruptedException {
        System.out.println("clicking on Sign in button");
        driver.findElement(By.id("login-signin")).click();
        Thread.sleep(2);
    }

    @Then("user is navigated to Inbox")
    public void user_is_navigated_to_Inbox() {
        System.out.println("Clicking on Mail button to Enter Inbox");
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//span[text()='Mail']")));
        driver.findElement(By.xpath("//span[text()='Mail']")).click();
    }

    @When("user clicks on compose button")
    public void click_compose_button(){
        System.out.println("Clicking on Compose button to compose a new Mail");
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//a[@href='/d/compose/']")));
        driver.findElement(By.xpath("//a[@href='/d/compose/']")).click();
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("message-to-field")));
    }

    @When("^enters receiver address (\\d+)$")
    public void enters_receiver_address(int receiver) {
        System.out.println("Enter" + receivers[receiver][0] + "as recieption address");
        driver.findElement(By.id("message-to-field")).sendKeys(receivers[receiver][0]);
    }

    @When("^subject (\\d+) (\\d+)$")
    public void subject(int sender_id, int receive_id) {
        System.out.println("Enter Subject as asked in format sender's sequence NAME receiver's sequence");
        String send = Integer.toString(sender_id);
        String receive = Integer.toString(receive_id);
        String subject = send + " " + subject_name + " " + receive ;
        System.out.println("Subject : "+subject);
        driver.findElement(By.xpath("//input[@aria-label='Subject']")).sendKeys(subject);
    }

    @When("body")
    public void body() throws IOException {
        System.out.println("Enter Mail body as given in Mailbody.txt");
        driver.findElement(By.xpath("//*[@id='editor-container']/div[@aria-label='Message body']")).sendKeys(mailbody());
    }
    @When("^add attachment (\\d+) (\\d+)$")
    public void add_attachment(int sender_id, int receive_id) throws IOException {
        String dir = System.getProperty("user.dir");
        System.out.println(dir);
        String path = dir + "\\attachments\\attachment.txt";
        System.out.println("Path :"+path);
        FileWriter myWriter = new FileWriter("attachments/attachment.txt");
        String send = Integer.toString(sender_id);
        String receive = Integer.toString(receive_id);
        String subject = send + " " + subject_name + " " + receive ;
        System.out.println("Writing content to file to attach as asked :"+subject);
        myWriter.write(subject);
        myWriter.close();
        driver.findElement(By.xpath("//input[@aria-label='Attach files']")).sendKeys(path);
        System.out.println("File attached");
    }

    @When("click on send")
    public void click_on_send() {
        System.out.println("Clicking on send ");
        driver.findElement(By.xpath("//*[@data-test-id='compose-send-button']")).click();
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@data-test-id='notifications']")));

        System.out.println("Message sent sucessfully");
    }

    @When("close window")
    public void close_window() {
        System.out.println("Closing Browser window");
        driver.close();
    }

    @After()
    public void teardown(){
        System.out.println("Tear down process");
        driver.close();
        driver.quit();
}

}
