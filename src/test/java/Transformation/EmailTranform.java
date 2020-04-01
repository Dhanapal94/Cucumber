package Transformation;

import cucumber.api.Transformer;

public class EmailTranform extends Transformer<String>{

	@Override
	public String transform(String value) {
		
		String modified = value.concat("@gmail.com");
		return modified;
	}
	
	

}
