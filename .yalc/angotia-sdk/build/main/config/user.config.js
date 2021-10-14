"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.userConfig = void 0;
var gender_model_1 = require("../models/gender.model");
exports.userConfig = {
    characters: {
        level: {
            min: 1,
            max: 99
        },
        quantity: {
            max: 4
        },
        sprite: {
            default: (_a = {},
                _a[gender_model_1.Gender.female] = "https://i.imgur.com/MLU2Uyf.png",
                _a[gender_model_1.Gender.male] = "https://i.imgur.com/dypMVUP.png",
                _a),
            size: {
                x: 144,
                y: 288
            },
            frames: 3,
            movementDirectionAnimations: 4
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29uZmlnL3VzZXIuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSx1REFBZ0Q7QUFFbkMsUUFBQSxVQUFVLEdBQUc7SUFDeEIsVUFBVSxFQUFFO1FBQ1YsS0FBSyxFQUFFO1lBQ0wsR0FBRyxFQUFFLENBQUM7WUFDTixHQUFHLEVBQUUsRUFBRTtTQUNSO1FBQ0QsUUFBUSxFQUFFO1lBQ1IsR0FBRyxFQUFFLENBQUM7U0FDUDtRQUNELE1BQU0sRUFBRTtZQUNOLE9BQU87Z0JBQ0wsR0FBQyxxQkFBTSxDQUFDLE1BQU0sSUFBRyxpQ0FBaUM7Z0JBQ2xELEdBQUMscUJBQU0sQ0FBQyxJQUFJLElBQUcsaUNBQWlDO21CQUNqRDtZQUNELElBQUksRUFBRTtnQkFDSixDQUFDLEVBQUUsR0FBRztnQkFDTixDQUFDLEVBQUUsR0FBRzthQUNQO1lBQ0QsTUFBTSxFQUFFLENBQUM7WUFDVCwyQkFBMkIsRUFBRSxDQUFDO1NBQy9CO0tBQ0Y7Q0FDRixDQUFDIn0=