package com.poscodx.kanbanboard.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.poscodx.kanbanboard.dto.JsonResult;
import com.poscodx.kanbanboard.repository.CardRepository;
import com.poscodx.kanbanboard.repository.TaskRepository;
import com.poscodx.kanbanboard.vo.TaskVo;

@RestController
public class ApiController {
	
	@Autowired
	private CardRepository cardRepository;
	@Autowired
	private TaskRepository taskRepository;

	@GetMapping("/api/card")
	public ResponseEntity<JsonResult> CardList() {
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(cardRepository.findCardList()));
	}
	
	@GetMapping("/api/task/{no}")
	public ResponseEntity<JsonResult> TaskList(@PathVariable("no") Long cardNo) {
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(taskRepository.findTaskByCardNo(cardNo)));
	}
	
	@PostMapping("/api/registerTask")
	public ResponseEntity<JsonResult> registerTask(@RequestBody TaskVo taskVo) {
		taskRepository.createTask(taskVo);
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(taskVo));
	}
	
	@PutMapping("/api/task/{no}")
	public ResponseEntity<JsonResult> updateTask(@PathVariable("no") Long no, @RequestBody TaskVo taskVo) {
	    // TaskVo에서 새로운 상태를 가져옵니다.
	    String newStatus = taskVo.getDone();

	        return ResponseEntity
	                .status(HttpStatus.OK)
	                .body(JsonResult.success(taskRepository.updateStatus(no, newStatus)));
	   
	}
	@DeleteMapping("/api/task/{no}")
	public ResponseEntity<JsonResult> deleteTask(@PathVariable("no") Long no) {
		return ResponseEntity 
				.status(HttpStatus.OK)
				.body(JsonResult.success(taskRepository.deleteTask(no)));
	}
}