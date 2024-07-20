package com.poscodx.kanbanboard.repository;

import java.util.HashMap;
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

	
		public boolean updateStatus(Long no, String done) {
		    // 'no'와 'done' 값을 가진 Map을 생성하고, 이를 사용하여 업데이트 쿼리를 실행합니다.
		    int result = sqlSession.update("task.updateStatus", Map.of(
		        "no", no,
		        "done", done
		    ));
		    // 업데이트가 성공적으로 이루어진 경우에만 true를 반환합니다.
		    return result == 1;
		}
		public int deleteTask(Long no) {
			return sqlSession.delete("task.deleteTask", no); 
		}    
}
