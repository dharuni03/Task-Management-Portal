package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.example.demo.Model.RModel;
import com.example.demo.Repository.RRepo;

@Service
public class Rservice {
	@Autowired //extends another class
    RRepo stRepo; //reference variable
	
	public RModel saveDetails(RModel e) {
		return stRepo.save(e);
	}
	public List<RModel> getDetails(){
		return stRepo.findAll();
	}
	public RModel updateDetails(RModel e1) {
		return stRepo.saveAndFlush(e1);
	}
	public void deleteDetails(int id)
	{
		stRepo.deleteById(id);
	}
	public List<RModel> getSorted(String field) {
		return stRepo.findAll(Sort.by(Sort.Direction.ASC,field));
	}
	
	public List<RModel> getWithPagination(@PathVariable int offset, @PathVariable int pageSize) {
		Page<RModel> page =stRepo.findAll(PageRequest.of(offset, pageSize));
		return page.getContent();
	
}
}