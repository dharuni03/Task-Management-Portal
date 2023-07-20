
package com.example.demo.Model;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder

@Entity
@Table(name="detail")
public class Model{
	@Id
	@Column(name="id")
	private int id;
	@Column(name="taskname")
           private String taskname;
	@Column(name="category")
           private String category;
	@Column(name="status")
	       private String status;
	@Column(name="startdate")
	       private LocalDate startdate;
	@Column(name="enddate")
    private LocalDate enddate;
	
		
	}
					
	
	
