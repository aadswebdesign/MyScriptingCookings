<?php
/**
 * ValidatorExtended.php
 * 08-12-2024
 * ======
 * This is an extension of vLucas's Valitron\Validator (https://github.com/vlucas/valitron)
 * The aim of this, creating a more JSON friendly output of Error values!
 * Old, with errors() and still possible
 * Valitron: {"post_title":["Post Title is required"],"post_content":["Post Content is required"]}
 * New, with errorsFlatten() 
 * ValidatorExtended: {"post_title":"Post Title is required","post_content":"Post Content is required"}
 * ======
 */
declare(strict_types=1);
namespace Lib\Valitron;
use Valitron\Validator;
final class ValidatorExtended extends Validator{
	protected array $_errors_flatten = [];
    /**
     * Get array of error messages
     *
     * @param  null|string $field
     * @return array|bool
     */
    public function errorsFlatten($field = null)
    {
        if ($field !== null) {
            return isset($this->_errors_flatten[$field]) ? $this->_errors_flatten[$field] : false;
        }
        return $this->_errors_flatten;
    }
	
	/**
	 * 
     * Add an error to error messages array
     *
     * @param string $field
     * @param string $message
     * @param array  $params
     */
    public function error($field, $message, array $params = array()){
        $message = $this->checkAndSetLabel($field, $message, $params);

        $values = array();
        // Printed values need to be in string format
        foreach ($params as $param) {
            if (is_array($param)) {
                $param = "['" . implode("', '", $param) . "']";
            }
            if ($param instanceof \DateTime) {
                $param = $param->format('Y-m-d');
            } else {
                if (is_object($param)) {
                    $param = get_class($param);
                }
            }
            // Use custom label instead of field name if set
            if (is_string($params[0]) && isset($this->_labels[$param])) {
                $param = $this->_labels[$param];
            }
            $values[] = $param;
        }
        $this->_errors[$field][] = vsprintf($message, $values);
        $this->_errors_flatten[$field] = vsprintf($message, $values);
    }
}