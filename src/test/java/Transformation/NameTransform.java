package Transformation;

import cucumber.api.Transformer;

public class NameTransform extends Transformer<String>{

	@Override
	public String transform(String name) {
		
		String spl[] = name.split("\\s");
		return spl[0];
		
	}

}
