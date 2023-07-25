package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.iamneo.security.entity.Model;
import com.iamneo.security.repository.Repo;

@Service
public class service {
	@Autowired //extends another class
    Repo stRepo; //reference variable
	
	public Model saveDetails(Model e) {
		return stRepo.save(e);
	}
	public List<Model> getDetails(){
		return stRepo.findAll();
	}
	public Model updateDetails(Model e1) {
		return stRepo.saveAndFlush(e1);
	}
	public void deleteDetails(int id)
	{
		stRepo.deleteById(id);
	}
	public List<Model> getSorted(String field) {
		return stRepo.findAll(Sort.by(Sort.Direction.ASC,field));
	}
	
	public List<Model> getWithPagination(@PathVariable int offset, @PathVariable int pageSize) {
		Page<Model> page =stRepo.findAll(PageRequest.of(offset, pageSize));
		return page.getContent();
	
}
}