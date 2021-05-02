package practise_framework;

import cucumber.api.cli.Main;

public class Test {

	public static void main(String[] args) throws Throwable {
		// TODO Auto-generated method stub
		String path = System.getProperty("user.dir");
		Main.main(new String[]{"-g", "cucumberframework.steps", path + "/src/test/java/cucumberframework/feature/ymail.feature"});

	}

}

