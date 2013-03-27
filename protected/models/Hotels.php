<?php

/**
 * This is the model class for table "tbl_hotels".
 *
 * The followings are the available columns in table 'tbl_hotels':
 * @property string $hotel_name
 * @property integer $shop_id
 * @property string $hotel_desc
 * @property integer $hotel_shid
 * @property integer $hotel_item_id
 * @property integer $status
 * @property integer $page
 * @property integer $cur_page
 * @property integer $selected
 * @property integer $ave_price
 */
class Hotels extends CActiveRecord
{
	/**
	 * Returns the static model of the specified AR class.
	 * @param string $className active record class name.
	 * @return Hotels the static model class
	 */
	public static function model($className=__CLASS__)
	{
		return parent::model($className);
	}

	/**
	 * @return string the associated database table name
	 */
	public function tableName()
	{
		return 'tbl_hotels';
	}

	/**
	 * @return array validation rules for model attributes.
	 */
	public function rules()
	{
		// NOTE: you should only define rules for those attributes that
		// will receive user inputs.
		return array(
			array('hotel_shid, ave_price', 'required'),
			array('shop_id, hotel_shid, hotel_item_id, status, page, cur_page, selected, ave_price', 'numerical', 'integerOnly'=>true),
			array('hotel_name', 'length', 'max'=>255),
			array('hotel_desc', 'safe'),
			// The following rule is used by search().
			// Please remove those attributes that should not be searched.
			array('hotel_name, shop_id, hotel_desc, hotel_shid, hotel_item_id, status, page, cur_page, selected, ave_price', 'safe', 'on'=>'search'),
		);
	}

	/**
	 * @return array relational rules.
	 */
	public function relations()
	{
		// NOTE: you may need to adjust the relation name and the related
		// class name for the relations automatically generated below.
		return array(
		);
	}

	/**
	 * @return array customized attribute labels (name=>label)
	 */
	public function attributeLabels()
	{
		return array(
			'hotel_name' => 'Hotel Name',
			'shop_id' => 'Shop',
			'hotel_desc' => 'Hotel Desc',
			'hotel_shid' => 'Hotel Shid',
			'hotel_item_id' => 'Hotel Item',
			'status' => 'Status',
			'page' => 'Page',
			'cur_page' => 'Cur Page',
			'selected' => 'Selected',
			'ave_price' => 'Ave Price',
		);
	}

	/**
	 * Retrieves a list of models based on the current search/filter conditions.
	 * @return CActiveDataProvider the data provider that can return the models based on the search/filter conditions.
	 */
	public function search()
	{
		// Warning: Please modify the following code to remove attributes that
		// should not be searched.

		$criteria=new CDbCriteria;

		$criteria->compare('hotel_name',$this->hotel_name,true);
		$criteria->compare('shop_id',$this->shop_id);
		$criteria->compare('hotel_desc',$this->hotel_desc,true);
		$criteria->compare('hotel_shid',$this->hotel_shid);
		$criteria->compare('hotel_item_id',$this->hotel_item_id);
		$criteria->compare('status',$this->status);
		$criteria->compare('page',$this->page);
		$criteria->compare('cur_page',$this->cur_page);
		$criteria->compare('selected',$this->selected);
		$criteria->compare('ave_price',$this->ave_price);

		return new CActiveDataProvider($this, array(
			'criteria'=>$criteria,
		));
	}
}