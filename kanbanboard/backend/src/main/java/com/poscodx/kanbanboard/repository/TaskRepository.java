package com.poscodx.kanbanboard.repository;

import java.util.List;

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
	    
}
