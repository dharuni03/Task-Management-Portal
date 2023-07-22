package com.iamneo.security.controller;

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

import com.iamneo.security.entity.Model;
import com.iamneo.security.service.service;
@CrossOrigin(origins="*")

@RestController
public class Controller {
	@Autowired //extends another class
         service stuService;
	
	@PostMapping("/addDetails")
	
	public Model addInfo(@RequestBody Model st) {
		return stuService.saveDetails(st);
	}
	@GetMapping("/showDetails")
	public List<Model>fetchDetails(){
		return stuService.getDetails();
	}
	@PutMapping("/updateDetails")
	public Model updateInfo(@RequestBody Model st1) {
		return stuService.updateDetails(st1);
	}
	@DeleteMapping("/deleteDetails/{sid}")
	public String deleteInfo(@PathVariable("sid") int sid)
	{
		stuService.deleteDetails(sid);
		return "Deleted details";
	}
	
	

}







