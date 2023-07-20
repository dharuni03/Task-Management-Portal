package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.RModel;
import com.example.demo.Service.Rservice;

@CrossOrigin
@RestController
public class RController {
	@Autowired //extends another class
         Rservice stuService;
	
	@PostMapping("/add")
	
	public RModel addInfo(@RequestBody RModel st) {
		return stuService.saveDetails(st);
	}
	@GetMapping("/show")
	public List<RModel>fetchDetails(){
		return stuService.getDetails();
	}
	@PutMapping("/update")
	public RModel updateInfo(@RequestBody RModel st1) {
		return stuService.updateDetails(st1);
	}
	@DeleteMapping("/delete/{sid}")
	public String deleteInfo(@PathVariable("sid") int sid)
	{
		stuService.deleteDetails(sid);
		return "Deleted details";
	}
	
	

}







