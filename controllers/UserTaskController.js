const { UserTask } = require('../models/index')


class UserTaskController {
    static async addUser(req, res) {
        const data = req.body.Users
        const dataUser = data.map(datum => ({
            user: datum,
            task: []
        }))
        try {
            const users = await UserTask.bulkCreate(dataUser)
            return res.status(201).json({
                status: '204 No Content',
                data: users
            });

        } catch (error) {
            return res.status(500).json({
                status: 500,
                message: 'Error add user'
            });
        }
    }

    static async addUserTask(req, res) {
        try {
            const user = req.body.user
            const task = req.body.task
            const newTask = new Array()
            const dataAddTask = {
                user: user,
                task: newTask
            }
            const findUser = await UserTask.findOne({ where: { user: user } })
            newTask.push(...findUser.dataValues.task)
            newTask.push(...task)
            if (task.length === 0) {
                res.status(500).json({
                    status: 500,
                    message: 'Task cannot be empty'
                })
            }
            try {
                const addTask = await UserTask.update(dataAddTask, {
                    where: { user: user }
                })

                return res.status(204).json({
                    status: 204,
                    message: `No content ${addTask}`
                });
            } catch (error) {
                return res.status(500).json({
                    status: 500,
                    message: 'Error add task'
                });
            }

        } catch (error) {
            return res.status(500).json({
                status: 500,
                message: 'Cannot find user'
            })
        }


    }

    static async deleteUserTask(req, res) {
        try {
            const user = req.body.user
            const task = req.body.task
            const newTask = new Array()
            const updateTask = new Array()
            const dataAddTask = {
                user: user,
                task: updateTask
            }
            const findUser = await UserTask.findOne({ where: { user: user } })
            newTask.push(...findUser.dataValues.task)
            const delateTask = newTask.filter(item => !task.includes(item))
            updateTask.push(...delateTask)
            if (task.length === 0) {
                res.status(500).json({
                    status: 500,
                    message: 'Task cannot be empty'
                })
            }
            try {
                const addTask = await UserTask.update(dataAddTask, {
                    where: { user: user }
                })

                return res.status(204).json({
                    status: 204,
                    message: `Success create new task ${addTask}`
                });
            } catch (error) {
                return res.status(500).json({
                    status: 500,
                    message: 'Error add task'
                });
            }

        } catch (error) {
            return res.status(500).json({
                status: 500,
                message: 'Cannot find user'
            })
        }

    }

    static async findUserTask(req, res) {

        try {
            const user1 = req.body.user[0]
            const user2 = req.body.user[1]
            const allTask = new Array()

            const findUser1 = await UserTask.findOne({ where: { user: user1 } })
            allTask.push(...findUser1.dataValues.task)
            const findUser2 = await UserTask.findOne({ where: { user: user2 } })
            allTask.push(...findUser2.dataValues.task)
            
            const commonTask = [...new Set(allTask)]
            return res.status(200).json({
                status: 200,
                task: commonTask
            })

        } catch (error) {
            return res.status(500).json({
                status: 500,
                message: 'Cannot find user'
            })
        }
    }

}

module.exports = UserTaskController