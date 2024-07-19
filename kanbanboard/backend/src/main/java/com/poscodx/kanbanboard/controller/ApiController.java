package com.poscodx.kanbanboard.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
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
	
	@PostMapping("/registerTask")
	public ResponseEntity<JsonResult> registerTask(@RequestBody TaskVo taskVo) {
		taskRepository.createTask(taskVo);
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(taskVo));
	}
	


}