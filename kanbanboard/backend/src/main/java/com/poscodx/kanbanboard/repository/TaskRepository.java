package com.poscodx.kanbanboard.repository;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.poscodx.kanbanboard.vo.CardVo;
import com.poscodx.kanbanboard.vo.TaskVo;

@Repository
public class TaskRepository {

	  @Autowired
	  private SqlSession sqlSession;
	    
	    public List<TaskVo> findTaskByCardNo(Long cardNo) {
	    	return sqlSession.selectList("task.findTaskList", cardNo); 
	    }

		public int createTask(TaskVo taskVo) {
			return sqlSession.insert("task.createTask",taskVo); 
		}

		public int modifyStatus(Long no, String done) {
			return sqlSession.update("task.updateStatus", Map.of("no",no,"done",done)); 
		}

		public int deleteTask(Long no) {
			return sqlSession.delete("task.deleteTask", no); 
		}    
}
